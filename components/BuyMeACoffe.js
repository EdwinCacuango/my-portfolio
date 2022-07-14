const BuyMeACoffe = () => {
    return (
        <a
            href="https://paypal.me/edwfc?country.x=EC&locale.x=es_XC"
            target="_blank"
            rel="noreferrer"
            className="md:text-xl btn-primary rounded-lg flex gap-3 items-center max-w-content">
            Donaciones por
            <div className="w-6">
                <img clasname="max-w-full" src="/paypal.png" alt="Paypal icon" />
            </div>
        </a>
    )
}

export default BuyMeACoffe