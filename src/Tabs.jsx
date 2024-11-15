import React from "react";

const Tab = ({ _id, selectedCategoryId, name, onTabClick }) => {
  const handleClick = (e) => {
    onTabClick(_id);
  };

  if (_id === selectedCategoryId) {
    return (
      <button className="border bg-[#edeef1] px-2 py-1 rounded-md">
        {name}
      </button>
    );
  }

  return (
    <button
      className="border border-[#edeef1] px-2 py-1 rounded-md"
      onClick={handleClick}
    >
      {name}
    </button>
  );
};

export default Tab;
