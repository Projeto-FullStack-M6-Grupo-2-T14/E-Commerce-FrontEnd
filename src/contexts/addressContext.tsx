import { Context, ReactNode, createContext } from 'react';
import { iUpdateAddress } from 'src/components/profile/Modals/modalUpdateAddress/modalUpdateAddress.schema';
import { ApiShop } from 'src/services/Api';

interface iAddressProviderProps {
    children: ReactNode
}

interface iAddressContext {
    updateAddress: (data: iUpdateAddress, userId: string) => Promise<void>
}

export const AddressContext: Context<iAddressContext> = createContext({} as iAddressContext)

const AddressProvider = ({ children }: iAddressProviderProps) => {
    const updateAddress = async (data: iUpdateAddress, userId: string) => {
        const token = localStorage.getItem("@TOKEN")

        await ApiShop.patch(`/address/${userId}`, data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
    }

    return (
        <AddressContext.Provider value={{
            updateAddress,
        }}>
            {children}
        </AddressContext.Provider>
    )
}

export default AddressProvider