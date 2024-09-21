import { CustomersTables } from "@/components/features/customers/CustomersTables";
import HeaderTitle from "@/components/ui/header-title";
import { customerData } from "@/lib/samples";

const Customers = () => {
    return (
        <>
            <HeaderTitle title="Customers" />
            <CustomersTables data={customerData} />
        </>
    );
};

export default Customers;
