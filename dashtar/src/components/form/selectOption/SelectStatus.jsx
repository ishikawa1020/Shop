import React, { useContext } from "react";
import { Select } from "@windmill/react-ui";

//internal import
import OrderServices from "@/services/OrderServices";
import { notifySuccess, notifyError } from "@/utils/toast";
import { SidebarContext } from "@/context/SidebarContext";

const SelectStatus = ({ id, order }) => {
  // console.log('id',id ,'order',order)
  const { setIsUpdate } = useContext(SidebarContext);
  const handleChangeStatus = (id, status) => {
    // return notifyError("This option disabled for this option!");
    OrderServices.updateOrder(id, { status: status })
      .then((res) => {
        notifySuccess(res.message);
        setIsUpdate(true);
      })
      .catch((err) => notifyError(err.message));
  };

  return (
    <>
      <Select
        onChange={(e) => handleChangeStatus(id, e.target.value)}
        className="h-8"
      >
        <option value="status" defaultValue hidden>
          {order?.status}
        </option>
        <option defaultValue={order?.status === "Delivered"} value="Delivered">
          配達済み
        </option>
        <option defaultValue={order?.status === "Pending"} value="Pending">
          保留中
        </option>
        <option
          defaultValue={order?.status === "Processing"}
          value="Processing"
        >
          処理中
        </option>
        <option defaultValue={order?.status === "Cancel"} value="Cancel">
          キャンセル
        </option>
      </Select>
    </>
  );
};

export default SelectStatus;
