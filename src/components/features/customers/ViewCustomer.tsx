import { AvatarWrapper } from "@/components/ui/avatar-wrapper";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { customerData } from "@/lib/samples";
import { TabsContent } from "@radix-ui/react-tabs";
import { useParams } from "react-router-dom";

const ViewCustomer = () => {
    const { customerId } = useParams<{ customerId: string }>();
    const customer = customerData.find((customer) => customer.id === customerId);

    const name = `${customer?.name} ${customer?.lastName}`;

    console.log({ customer });
    return (
        <div>
            <div className="flex items-center space-x-4">
                <AvatarWrapper src={""} alt={"avatar customer"} fallbackText={"AB"} />
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">{name}</h3>
            </div>
            <div>
                <Separator className="my-4" />
                <Tabs defaultValue="general">
                    <div className="flex items-center">
                        <TabsList>
                            <TabsTrigger value="general">General</TabsTrigger>
                            <TabsTrigger value="appointments">Appointments</TabsTrigger>
                            <TabsTrigger value="forms">Forms</TabsTrigger>
                        </TabsList>
                        {/* <div className="ml-auto flex items-center gap-2">
                            <TabsList>
                                <TabsTrigger value="general">
                                    <LayoutList />
                                </TabsTrigger>
                                <TabsTrigger value="appointments">
                                    <Grid2X2 />
                                </TabsTrigger>
                            </TabsList>
                        </div> */}
                    </div>
                    <TabsContent value="general">
                        <div className="my-4 w-full md:w-2/3">
                            <div className="grid gap-3">
                                {/* <div className="text-left font-semibold">General Information</div> */}
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Name</dt>
                                        <dd>
                                            {customer?.name} {customer?.lastName}
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Email</dt>
                                        <dd>
                                            <a href="mailto:">{customer?.email}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Phone</dt>
                                        <dd>
                                            <a href="tel:">{customer?.phone}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Birth date</dt>
                                        <dd>
                                            <a href="tel:">{customer?.birthDate}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Address</dt>
                                        <dd>
                                            <a href="tel:">{customer?.address}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">City</dt>
                                        <dd>
                                            <a href="tel:">{customer?.city ?? "-"}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Country</dt>
                                        <dd>
                                            <a href="tel:">{customer?.country ?? "-"}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Zip code</dt>
                                        <dd>
                                            <a href="tel:">{customer?.zipCode ?? "-"}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Gender</dt>
                                        <dd>
                                            <a href="tel:" className="capitalize">
                                                {customer?.gender}
                                            </a>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                            {/* <Separator className="my-4" /> */}
                            {/* <div className="grid gap-3">
                                <div className="text-left font-semibold">Customer Information</div>
                                <dl className="grid gap-3">
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Customer</dt>
                                        <dd>
                                            {customer?.name} {customer?.lastName}
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Email</dt>
                                        <dd>
                                            <a href="mailto:">{customer?.email}</a>
                                        </dd>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <dt className="text-muted-foreground">Phone</dt>
                                        <dd>
                                            <a href="tel:">{customer?.phone}</a>
                                        </dd>
                                    </div>
                                </dl>
                            </div> */}
                        </div>
                    </TabsContent>
                    <TabsContent value="appointments"></TabsContent>
                    <TabsContent value="forms"></TabsContent>
                </Tabs>
            </div>
        </div>
    );
};

export default ViewCustomer;
