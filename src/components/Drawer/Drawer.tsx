import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

type DrawerPlacement = 'right' | 'left' | 'bottom';

type DrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  placement?: DrawerPlacement;
  children: React.ReactNode;
};

const placementClasses: Record<DrawerPlacement, { position: string; open: string; closed: string }> = {
  right: {
    position: 'right-0 top-0 h-dvh w-full max-w-md',
    open: 'translate-x-0',
    closed: 'translate-x-full',
  },
  left: {
    position: 'left-0 top-0 h-dvh w-full max-w-md',
    open: 'translate-x-0',
    closed: '-translate-x-full',
  },
  bottom: {
    position: 'bottom-0 left-0 h-dvh w-full',
    open: 'translate-y-0',
    closed: 'translate-y-full',
  },
};

function Drawer({
  isOpen,
  onClose,
  placement = 'right',
  children,
}: DrawerProps) {
  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  const placementStyle = placementClasses[placement];

  return (
    <>
      <div
        aria-hidden="true"
        className={`fixed inset-0 z-50 ${placement === 'bottom' ? '' : 'bg-black/50'} cursor-pointer transition-opacity duration-300 ease-in-out ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />
      <aside
        aria-hidden={!isOpen}
        aria-label="Drawer"
        inert={!isOpen}
        className={`fixed z-100 ${placementStyle.position} overflow-y-auto bg-white p-6 shadow-xl transition-transform duration-300 ease-in-out ${isOpen ? placementStyle.open : placementStyle.closed} ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} dark:bg-gray-100`}
      >
        <button
          type="button"
          aria-label="Close drawer"
          className="absolute right-2 top-2 grid size-8 place-items-center cursor-pointer rounded-full text-lg transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black dark:text-gray-100"
          onClick={onClose}
        >
          <FontAwesomeIcon icon={faXmark} aria-hidden="true" />
        </button>
        {children}
      </aside>
    </>
  );
}

export default Drawer;