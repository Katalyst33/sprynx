import { Disclosure, Transition } from "@headlessui/react";
export default function ServiceDropDownComponent(props: any) {
  const { service } = props;

  return (
    <>
      <div className="py-2 ">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="px-2 py-1 border-b w-full text-white text-left flex justify-between">
                <div className="font-semibold">{service.title}</div>
                <div>
                  {open ? (
                    <i className="fa-solid fa-minus"></i>
                  ) : (
                    <i className="fa-solid fa-plus"></i>
                  )}
                </div>
              </Disclosure.Button>
              <Transition
                enter="transition duration-300 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="text-white text-left text-sm p-2">
                  {service.description}
                </Disclosure.Panel>
              </Transition>
            </>
          )}
        </Disclosure>
      </div>
    </>
  );
}
