import PropTypes from "prop-types";
import TransactionItem from "./TransactionItem";
import s from "./Transactions.module.css";

export default function Transactions({ items }) {
  return (
    <div>
      <table className={s.transactions}>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map((item) => (
            <TransactionItem
              key={item.id}
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

Transactions.propTypes = {
  items: PropTypes.array,
};
