import { themes } from "../../../../themes";

export const ThemeController = () => {
  return (
    <div className="dropdown dropdown-end absolute top-6 right-6">
      <div tabIndex={0} role="button" className="btn m-1">
        Theme
        <svg
          width="12px"
          height="12px"
          className="h-2 w-2 fill-current opacity-60 inline-block"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 2048 2048"
        >
          <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content peer z-[1] p-2 shadow-2xl bg-base-300 text-base-content rounded-box w-52"
      >
        <li>
          {themes.map((theme) => (
            <input
              key={theme}
              type="radio"
              name="theme-dropdown"
              className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
              aria-label={theme}
              value={theme}
            />
          ))}
        </li>
      </ul>
    </div>
  );
};
