import { atom, selector } from "recoil";
import { Wallet } from "tonstarter-contracts/lib/wallets/types";

export interface ConnectionStateAtom {
  address: string | null;
  wallet: Wallet | null;
  session: any;
  adapterId: any;
  isConnecting: boolean;
  isRestoring: boolean;
}

const connectionStateAtom = atom<ConnectionStateAtom>({
  key: "connectionStateAtom",
  default: {
    address: null,
    wallet: null,
    session: null,
    adapterId: null,
    isConnecting: true,
    isRestoring: true,
  },
});

const connectWalletSelector = selector<ConnectionStateAtom>({
  key: "connectWalletSelector",
  get: ({ get }) => get(connectionStateAtom),
  set: ({ set, get }, newValue: any) => {
    const state = get(connectionStateAtom);

    set(connectionStateAtom, {
      ...state,
      address: newValue.address,
      wallet: newValue.wallet,
    });
  },
});

export { connectionStateAtom, connectWalletSelector };
