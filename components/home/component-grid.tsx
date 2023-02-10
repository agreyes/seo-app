import { useState } from "react";
import { useDemoModal } from "@/components/home/demo-modal";
import Popover from "@/components/shared/popover";
import Tooltip from "@/components/shared/tooltip";
import { ChevronDown } from "lucide-react";
import https from 'https';

export default function ComponentGrid() {
  const [state, setState] = useState({
    searchText: 'efiling integration',
    targetUrl: 'www.infoTrack.com',
  });

  const handleChange = (key : string) => (e : React.FormEvent<HTMLInputElement>) => {
    setState({ ...state, [key]: e.currentTarget.value });
  }

  const onClick = () => {
    console.log(state);
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      <Tooltip content="Search text">
        <input type="text" value={state.searchText} onChange={handleChange('searchText')} placeholder="efiling integration" className="flex w-50 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
        </input>
      </Tooltip>
      <Tooltip content="Target url">
        <input type="text" value={state.targetUrl} onChange={handleChange('targetUrl')}placeholder="www.infoTrack.com" className="flex w-50 cursor-default items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100">
        </input>
      </Tooltip>
      <button
        onClick={onClick}
        className="flex w-20 items-center justify-center rounded-md border border-gray-300 px-3 py-2 transition-all duration-75 hover:border-gray-800 focus:outline-none active:bg-gray-100"
      >
        <p className="text-gray-600">Search</p>
      </button>
    </div>
  );
}
