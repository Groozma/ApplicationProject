import "./Refund.scss";

function Refund({ phone }) {
  // Displays refund contact information with clickable phone link
  return (
    <div className="refund">
      For all refund inquiries, please contact our office at{" "}
      <a href={`tel:${phone}`}>{phone}</a> during business hours.
    </div>
  );
}

export default Refund;
