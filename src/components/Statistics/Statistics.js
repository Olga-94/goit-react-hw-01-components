import PropTypes from "prop-types";
import s from "./Statistics.module.css";
import StatisticItem from "./StatisticItem";
export default function Statistics({ title, stats }) {
  const isTitle = { title };

  return (
    <section>
      <div className={s.statistics}>
        <h2 className={s.title}>{isTitle && title}</h2>
        <ul className={s.statisticsList}>
          {stats.map((stat) => (
            <li className={s.statisticsItem} key={stat.id}>
              <StatisticItem label={stat.label} percentage={stat.percentage} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};
