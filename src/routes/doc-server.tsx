import rsLogo from "../assets/logo.png"
import * as DropdownMenu from "@radix-ui/react-dropdown-menu"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faAngleDown,
  faEllipsisVertical,
  faSpinner,
} from "@fortawesome/free-solid-svg-icons"

function DocServerRoute() {
  return (
    <div className="h-screen overflow-auto bg-base-300 p-2" data-theme="light">
      <header className="mb-2 flex items-center justify-between">
        <img src={rsLogo} className="h-10 w-48" />
        <button className="btn-ghost btn-active btn-sm">Swagger</button>
      </header>
      <section className="mb-2 flex items-center space-x-2">
        <button className={`btn btn-accent btn-sm`}>Today</button>
        <button className={`btn btn-outline btn-accent btn-sm`}>
          This week
        </button>
        <button className={`btn btn-outline btn-accent btn-sm`}>
          Last week
        </button>
        <button className={`btn btn-outline btn-accent btn-sm`}>
          This month
        </button>
        <DropdownMenu.Root>
          <DropdownMenu.Trigger asChild>
            <button className="btn btn-outline btn-accent btn-sm">
              Previous Months &nbsp;{" "}
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </button>
          </DropdownMenu.Trigger>
          <DropdownMenu.Content align="start" asChild>
            <ul className="menu rounded-box mt-1 w-48 bg-base-100">
              <DropdownMenu.Item asChild>
                <li>
                  <span>August</span>
                </li>
              </DropdownMenu.Item>
              <DropdownMenu.Item asChild>
                <li>
                  <span>July</span>
                </li>
              </DropdownMenu.Item>
            </ul>
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </section>
      <section className="flex items-center space-x-3">
        <label>You are viewing</label>
        <button className="btn btn-outline btn-accent btn-sm flex space-x-2 bg-base-100">
          <span>All Servers</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <label>Auto refresh every</label>
        <button className="btn btn-outline btn-accent btn-sm flex space-x-2 bg-base-100">
          <span>5 Seconds</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </button>
        <FontAwesomeIcon icon={faSpinner} />
      </section>
      <div className="divider" />
      <section className="grid grid-cols-4 gap-4 font-medium">
        {[1, 2, 3, 4, 5, 6, 7].map(() => (
          <div className="card space-y-5 rounded-lg bg-base-100 pb-4 shadow-xl">
            <div className="bg-info py-2 text-center text-info-content">
              Binary Collection
            </div>
            <div className="flex justify-between px-2">
              <span>Average Time</span>
              <span>100.11</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Thread Count</span>
              <span>10</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Thread Processing</span>
              <span>3</span>
            </div>
            <div className="flex justify-between px-2">
              <span>Thread Idle</span>
              <span>7</span>
            </div>
          </div>
        ))}
      </section>
    </div>
  )
}

export default DocServerRoute
