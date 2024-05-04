function display(){
    fetch('https://restcountries.com/v3.1/all')
    .then(res=>res.json())
    .then(data=>console.log(data))
    .catch(error=>console.error(error))
}

//using async function to display countri details

async function displayCountries(){

    try{
        
        //fetch the countries api for details
        let res = await fetch('https://restcountries.com/v3.1/all')
        let data = await res.json();

        //data in the api

        if(dat)
        {
            let root = document.getElementById("root")

            dataforEach((e) => {
                root.innerHTML=`
                
                `
                
            });

        }
        else
        {

        }
        


    }
    catch
    {
        console.error(error)
    }

}

displayCountries()