import React from "react";
import { MentionsInput, Mention, MentionsInputProps } from "react-mentions";
export default function MentionInput(props: MentionsInputProps) {
  return (
    <MentionsInput
      {...props}
      className="block w-full h-auto max-w-lg px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-sm shadow-sm appearance-none auto-rows-auto form-input focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
    >
      <Mention
        trigger="@"
        markup="{{__id__}}"
        displayTransform={(id) => `<-- ${id} -->`}
        data={[]}
        onAdd={() => {}}
      />
    </MentionsInput>
  );
}
