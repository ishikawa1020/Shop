import React from "react";
import { Select } from "@windmill/react-ui";

const SelectRole = ({ setRole, register, name, label }) => {
  return (
    <>
      <Select
        onChange={(e) => setRole(e.target.value)}
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>
        スタッフの役割
        </option>
        <option value="Admin">管理者</option>
        <option value="CEO">CEO</option>
        <option value="Manager">管理者</option>
        <option value="Accountant">会計士</option>
        <option value="Driver"> 運転手 </option>
        <option value="Security Guard">警備員</option>
        <option value="Deliver Person">配達員</option>
      </Select>
    </>
  );
};

export default SelectRole;
