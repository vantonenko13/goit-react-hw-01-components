import React from "react";

import cl from "./Statistics.module.scss";

const Statistics = ({ title, stats }) => {
  return (
    <section className={cl.statistics}>
      {title && <h2 className={cl.title}>{title}</h2>}

      <ul className={cl.statlist}>
        {stats &&
          stats.length &&
          stats.map((item) => {
            const { id, label, percentage, backgroundColor } = item;

            return (
              <li
                key={`stats-item-${id}`}
                className={cl.item}
                style={{ backgroundColor: backgroundColor }}
              >
                <span className={cl.label}>{label}</span>
                <span className={cl.percentage}>{percentage} %</span>
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default Statistics;
