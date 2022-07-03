import type { Component } from "solid-js";

import type { ConnectedDeviceData } from "@/stores/webmidi";
import { webMidiDevices, setWebMidiDevices } from "@/stores/webmidi";

import Input from "@/components/Input";

const SettingsMidi: Component = () => {
  const handleNameUpdate = (device_index: number, name: string) => {
    const devices = webMidiDevices();
    devices[device_index].name = name;

    setWebMidiDevices([...devices]);
  };

  return (
    <>
      <Title>lpadder - settings: MIDI</Title>
      <h2>MIDI devices profiles</h2>
      <p>Here, you can find the your saved MIDI devices profiles.</p>

      <div>
        <Index each={webMidiDevices()}>
          {(device, index) => (
            <div>
              <h4>{
                device().name === device().raw_name
                  ? device().name
                  : `${device().name} (${device().raw_name})`
              }</h4>

              <Input
                onInput={evt => {
                  const devices = webMidiDevices();
                  devices[index] = {
                    ...device(),
                    name: evt.currentTarget.value
                  };

                  setWebMidiDevices([...devices]);
                }}
                value={device().name}
              />
            </div>
          )}
        </Index>
      </div>
    </>
  );
};

export default SettingsMidi;