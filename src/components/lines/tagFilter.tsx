import React from "react";
import { Link } from "gatsby";
import classnames from "classnames";
import { filter, label, list, link, linkCurrent } from "./tagFilter.module.css";

interface TagFilterProps {
  tags: string[];
  activeTag: string | null;
}

export const tagPath = (tag: string) => `/lines?tag=${encodeURIComponent(tag)}`;

const TagFilter: React.FC<TagFilterProps> = ({ tags, activeTag }) => (
  <nav className={filter} aria-label="Filter posts by tag">
    <span className={label}>filter:</span>
    <ul className={list}>
      <li>
        <Link
          to="/lines"
          className={classnames(link, !activeTag && linkCurrent)}
          aria-current={activeTag ? undefined : "true"}
        >
          all
        </Link>
      </li>
      {tags.map((tag) => {
        const isActive = tag === activeTag;
        return (
          <li key={tag}>
            {/* The active tag links back to the unfiltered list, so clicking it again clears. */}
            <Link
              to={isActive ? "/lines" : tagPath(tag)}
              className={classnames(link, isActive && linkCurrent)}
              aria-current={isActive ? "true" : undefined}
            >
              {tag}
            </Link>
          </li>
        );
      })}
    </ul>
  </nav>
);

export default TagFilter;
