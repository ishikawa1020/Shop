import { Badge } from "@windmill/react-ui";

const Status = ({ status }) => {
  console.log(status);
  const statues = {
    Active: "アクティブ",
    Inactive: "非アクティブ",
    Delivered: "配達済み",
    Pending: "保留中",
    Processing: "処理中",
    Cancel: "キャンセル",
  };
  return (
    <>
      <span className="font-serif">
        {(status === "Pending" || status === "Inactive") && (
          <Badge type="warning">{statues[status]}</Badge>
        )}
        {status === "Waiting for Password Reset" && (
          <Badge type="warning">{statues[status]}</Badge>
        )}
        {status === "Processing" && <Badge>{statues[status]}</Badge>}
        {(status === "Delivered" || status === "Active") && (
          <Badge type="success">{statues[status]}</Badge>
        )}
        {status === "Cancel" && <Badge type="danger">{statues[status]}</Badge>}
        {status === `POS-Completed` && (
          <Badge className="dark:bg-teal-900 bg-teal-100">
            {statues[status]}
          </Badge>
        )}
      </span>
    </>
  );
};

export default Status;
