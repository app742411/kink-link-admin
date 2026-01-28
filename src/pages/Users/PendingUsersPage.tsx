import PendingUsersComponent from "../../components/users/PendingUsersComponent";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";

const PendingUsersPage = () => {
    return (
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
            <PageBreadcrumb
                pageTitle="Pending Users"
                description="Review and approve user registrations"
            />
            <PendingUsersComponent />
        </div>
    );
};

export default PendingUsersPage;
