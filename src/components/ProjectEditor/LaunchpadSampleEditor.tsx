import type { ProjectDataSample, ProjectData } from "@/types/Project";

import { useUnsavedProjectStore } from "@/stores/unsaved_project";
import Button from "../Button";

interface LaunchpadSampleEditorProps {
  launchpad: ProjectData["launchpads"][number] & { id: number },
  page: ProjectData["launchpads"][number]["pages"][number] & { id: number },
  sample: ProjectDataSample & { id: number, isAssigned: boolean };
}

export default function LaunchpadSampleEditor ({
  launchpad,
  page,
  sample
}: LaunchpadSampleEditorProps) {
  const { data, setData } = useUnsavedProjectStore();

  const assignSampleToPad = () => {
    if (!data) return;

    const data_copy = { ...data };
    data_copy.launchpads[launchpad.id].pages[page.id].samples[sample.id] = {};

    setData(data_copy);
  };

  return (
    <div className="
      w-full p-6 rounded-lg mb-8

      bg-gray-700 max-w-md mx-auto
    ">
      <h4 className="
        font-medium text-xl text-center
        mb-4
      ">
        Note {sample.id}
      </h4>

      {sample.isAssigned ? (
        <div>
        </div>
      ) 
        : (
          <div className="flex justify-center">
            <Button
              onClick={assignSampleToPad}
            >
              Assign this pad !
            </Button>
          </div>
        )}

    </div>
  );
}