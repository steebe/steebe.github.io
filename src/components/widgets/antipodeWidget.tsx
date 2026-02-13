import React, { useState, useRef, useEffect, useCallback } from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Widget from "./widget";

const MAP_CONTAINER_STYLE = { width: "100%", height: "350px" };
const DEFAULT_CENTER: google.maps.LatLngLiteral = { lat: 20, lng: 0 };
const DEFAULT_ZOOM = 2;
const ZOOMED_IN = 5;
const LIBRARIES: ["marker"] = ["marker"];
const TITLE = "dig to China!";

const toAntipode = (lat: number, lng: number): google.maps.LatLngLiteral => ({
  lat: -lat,
  lng: lng > 0 ? lng - 180 : lng + 180,
});

const formatCoordinates = (lat: number, lng: number): string => {
  const latDir = lat >= 0 ? "N" : "S";
  const lngDir = lng >= 0 ? "E" : "W";
  return `${Math.abs(lat).toFixed(2)}°${latDir}, ${Math.abs(lng).toFixed(2)}°${lngDir}`;
};

const AntipodeWidget = () => {
  const [mounted, setMounted] = useState(false);
  const [origin, setOrigin] = useState<google.maps.LatLngLiteral | null>(null);
  const [antipode, setAntipode] = useState<google.maps.LatLngLiteral | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const mapRef = useRef<google.maps.Map | null>(null);
  const originMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const antipodeMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY ?? "",
    libraries: LIBRARIES,
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(() => {
    if (originMarkerRef.current) originMarkerRef.current.map = null;
    if (antipodeMarkerRef.current) antipodeMarkerRef.current.map = null;
    mapRef.current = null;
  }, []);

  const placeMarker = useCallback(
    (
      position: google.maps.LatLngLiteral,
      markerRef: React.MutableRefObject<google.maps.marker.AdvancedMarkerElement | null>,
    ) => {
      if (markerRef.current) {
        markerRef.current.map = null;
      }
      markerRef.current = new google.maps.marker.AdvancedMarkerElement({
        map: mapRef.current,
        position,
      });
    },
    [],
  );

  const animateToAntipode = useCallback((destination: google.maps.LatLngLiteral) => {
    const map = mapRef.current;
    if (!map) return;
    setIsAnimating(true);
    map.setZoom(2);
    setTimeout(() => {
      map.panTo(destination);
      setTimeout(() => {
        map.setZoom(ZOOMED_IN);
        setIsAnimating(false);
      }, 1500);
    }, 800);
  }, []);

  const onMapClick = useCallback(
    (e: google.maps.MapMouseEvent) => {
      if (isAnimating || !e.latLng) return;
      const lat = e.latLng.lat();
      const lng = e.latLng.lng();
      const newOrigin = { lat, lng };
      const newAntipode = toAntipode(lat, lng);
      setOrigin(newOrigin);
      setAntipode(newAntipode);
      placeMarker(newOrigin, originMarkerRef);
      placeMarker(newAntipode, antipodeMarkerRef);
      animateToAntipode(newAntipode);
    },
    [isAnimating, placeMarker, animateToAntipode],
  );

  const handleReset = useCallback(() => {
    if (originMarkerRef.current) {
      originMarkerRef.current.map = null;
      originMarkerRef.current = null;
    }
    if (antipodeMarkerRef.current) {
      antipodeMarkerRef.current.map = null;
      antipodeMarkerRef.current = null;
    }
    setOrigin(null);
    setAntipode(null);
    mapRef.current?.setCenter(DEFAULT_CENTER);
    mapRef.current?.setZoom(DEFAULT_ZOOM);
  }, []);

  const antipodeLink =
    typeof window !== "undefined" && window.location.pathname !== "/antipode"
      ? "/antipode"
      : undefined;

  if (!mounted || !isLoaded) {
    return <Widget title={TITLE}>Loading map...</Widget>;
  }

  return (
    <Widget title={TITLE} to={antipodeLink}>
      <p style={{ margin: "0 0 0.75rem", fontSize: "0.85rem" }}>
        {isAnimating
          ? "Travelling to the antipode..."
          : origin
            ? `Origin: ${formatCoordinates(origin.lat, origin.lng)}`
            : "Click anywhere on the map to find its antipode."}
      </p>
      {antipode && !isAnimating && (
        <p style={{ margin: "0 0 0.75rem", fontSize: "0.85rem" }}>
          Antipode: {formatCoordinates(antipode.lat, antipode.lng)}
        </p>
      )}
      <GoogleMap
        mapContainerStyle={MAP_CONTAINER_STYLE}
        center={DEFAULT_CENTER}
        zoom={DEFAULT_ZOOM}
        onClick={onMapClick}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          gestureHandling: "cooperative",
          clickableIcons: false,
          mapId: "DEMO_MAP_ID",
          draggableCursor: "crosshair",
          draggingCursor: "grabbing",
        }}
      />
      {origin && !isAnimating && (
        <button
          onClick={handleReset}
          style={{
            marginTop: "0.75rem",
            padding: "0.5rem 1.25rem",
            fontSize: "0.85rem",
            fontFamily: "inherit",
            backgroundColor: "#2f4f4f",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Reset
        </button>
      )}
    </Widget>
  );
};

export default AntipodeWidget;
