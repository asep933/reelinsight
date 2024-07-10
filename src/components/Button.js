const Button = ({ type = 'submit', className, ...props }) => (
    <button
        type={type}
        className={`${className} inline-flex items-center px-4 py-2 
        rounded-full font-bold text-xs text-secondary capitalize 
        tracking-widest focus:outline-primary active:outline-none
        focus:border-primary focus:ring ring-primary disabled:opacity-25
        transition duration-300 ease-in-out`}
        {...props}
    />
)

export default Button
