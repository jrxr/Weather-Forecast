import moment from 'moment';

function DetailCard({weather_icon, data}) {
    const {clouds, main, weather} = data.list[0]

    return (
        <div className="container p-4 flex items-center justify-center shadow-lg rounded-lg bg-gray-400 h-1/3 mb-auto">
            <div className="my-auto">
            <p className="font-bold text-5xl text-black mb-2">{Math.round(main.temp)}&deg;C</p>
            <p className="text-4xl text-white tracking-widest">{weather[0].main}
                <img src={weather_icon} className="w-1/4 inline" />
            </p>
            <p className="text-black text-xs uppercase tracking-widest">{weather[0].description}</p>
            <p className="tracking-wider">{moment().format("dddd MMM YYYY")}</p>
            </div>
            <div className="my-2 border-l-2 border-blue-900 p-2">
            <p className="text-white text-lg">Tempo Real: {Math.round(main.feels_like)}&deg;C</p>
            <p className="text-white text-lg">Umidade: {main.humidity}%</p>
            <p className="text-white text-lg">Cobertura de Nuvem: {clouds.all}%</p>
            <p className="text-white text-lg">Temperatura Minima: {Math.round(main.temp_min)}&deg;C</p>
            <p className="text-white text-lg">Temperatura Máxima: {Math.round(main.temp_max)}&deg;C</p>
            </div>
        </div>
    )
}



export default DetailCard
