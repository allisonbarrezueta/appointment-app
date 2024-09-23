import { Button } from "@/components/ui/button";
import HeaderTitle from "@/components/ui/header-title";
import { Input } from "@/components/ui/input";
import { InputPhone } from "@/components/ui/input-phone";
import { Label } from "@/components/ui/label";
import { SelectWrapper } from "@/components/ui/select-wrapper";
import { genderOption } from "@/lib/constants";

const HandleCustomer = () => {
    const submitNewCustomer = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as NewCustomer;
        console.log(data);
    };
    return (
        <>
            <HeaderTitle title="New customer" containerClassname="w-full" className="w-full border-b text-left" goBack />
            <form className="grid gap-4 lg:gap-6" onSubmit={submitNewCustomer}>
                <h4 className="scroll-m-20 text-left text-xl font-semibold tracking-tight">General information</h4>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="name">Name</Label>
                        <Input required name="name" placeholder="Name" maxLength={25} />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="last name">Last name</Label>
                        <Input required name="lastName" placeholder="Last name" maxLength={25} />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="id">Id</Label>
                        <Input required name="identification" placeholder="Id" maxLength={25} />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="birth data">Birth date</Label>
                        <Input required name="birthDate" placeholder="Birth date" type="date" />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="gender">Gender</Label>
                        <SelectWrapper name="gender" placeholder="Select gender" options={genderOption} />
                    </div>
                </div>
                <h4 className="scroll-m-20 text-left text-xl font-semibold tracking-tight">Contact information</h4>
                <div className="grid gap-4 md:grid-cols-2">
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:col-span-2 md:max-w-full">
                        <Label htmlFor="Email">Email</Label>
                        <Input required name="email" placeholder="Email" className="md:col-span-2" />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="phone">Phone</Label>
                        <InputPhone required name="phone" defaultCountry="EC" placeholder="Phone number" />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="Address">Address</Label>
                        <Input name="address" placeholder="Address" />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="City">City</Label>
                        <SelectWrapper name="city" placeholder="City" options={[]} />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="Country">Country</Label>
                        <SelectWrapper name="country" placeholder="Country" options={[]} />
                    </div>
                    <div className="grid w-full max-w-sm grid-cols-2 items-center gap-1.5 text-left md:grid-cols-1">
                        <Label htmlFor="Zip code">Zip code</Label>
                        <Input name="zipCode" placeholder="zip code" maxLength={6} className="md:col-span-2" />
                    </div>
                </div>
                <Button type="submit">Create</Button>
            </form>
        </>
    );
};

export default HandleCustomer;
