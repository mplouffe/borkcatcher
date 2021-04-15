import '../css/borkCatcher.css';

function main()
{
    const canvas = document.querySelector("#gameCanvas");
    const context = canvas.getContext("2d");

    if (context === null)
    {
        alert("Unable to initialize 2d context. Your browser or machine may not support it.")
        return;
    }

    
}

window.onload = main;