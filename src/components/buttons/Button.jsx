import { classNames } from "../../utils/class-names";

function Button({
  id,
  className,
  label = "tmp",
  color = "light-gray",
  type = "cube",
  onClick,
}) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={classNames(
        getBackgroundColor(color),
        getType(type),
        "text-white text-xl hover:text-gray-900 hover:border hover:border-white hover:scale-[2px]",
        className
      )}
    >
      {label}
    </button>
  );
}

const getBackgroundColor = (color) => {
  switch (color) {
    case "red":
      return "bg-[#ac3939]";
    case "light-gray":
      return "bg-[#808080]";
    case "dark-gray":
      return "bg-[#666666]";
    case "blue":
      return "bg-[#004466]";
  }
};

const getType = (type) => {
  switch (type) {
    case "cube":
      return "min-w-[80px] min-h-[65px]";
    case "horizontal":
      return "min-h-[65px] min-w-[160px]";
    case "vertical":
      return "min-h-[160px] min-w-[80px]";
  }
};

export default Button;
