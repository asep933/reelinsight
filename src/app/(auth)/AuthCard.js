const AuthCard = ({ children }) => (
    <div
        className="h-auto bg-login flex flex-col sm:justify-center 
    items-center lg:pt-2 pt-8 lg:px-0 px-4 sm:pt-0">
        <div
            className="w-full sm:max-w-md mt-32 mb-16 px-16 py-44 
        bg-light shadow-md overflow-hidden sm:rounded-lg rounded-md">
            {children}
        </div>
    </div>
)

export default AuthCard
