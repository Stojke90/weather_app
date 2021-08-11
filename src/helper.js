export const imgPath = (data) => `images/${data.weather.code}/${data.weather.icon}.png`;
export const altOfImgPath = (data) => `Weather App ${data.pod === 'n' ? 'Night ' : 'Day '}${data.weather.description}`;
export const locationPath = (location) => `lat=${location.lat}&lon=${location.lon}`;
export const temp = (data) => <p>{Math.round(data.low_temp)}<sup>o</sup> --- {Math.round(data.high_temp)}<sup>o</sup></p>;
export const pop = (data) => data.pop === 0 ? <p style={{color: 'transparent', textShadow: 'none'}}>{data.pop}&#37;</p> : <p>{data.pop}&#37;</p>;

export const dayOfWeek = (data) => {

    const day = new Date(data.valid_date.split('-').join(',')).toString().slice(0,3);
    
        if(day === 'Mon') {
          return <p>Monday</p>
        }else if(day === 'Tue') {
          return <p>Tuesday</p>
        }else if(day === 'Wed') {
          return <p>Wednesday</p>
        }else if(day === 'Thu') {
          return <p>Thursday</p>
        }else if(day === 'Fri') {
          return <p>Friday</p>
        }else if(day === 'Sat') {
          return <p>Saturday</p>
        }else if(day === 'Sun') {
          return <p>Sunday</p>
        }

        return day;
    };

export const time = (data) => {
        const date = new Date(data * 1000);
        return date.toString().substring(15,21)
    };

export  const copyOfDetails = (name, path, path2, value, key) => {

            return(
                <section className='detailsTodayWeather' key={key} >
                    <span>{name}</span>
                    <p className='descriptionWeather'>{path} {path2} {value}</p>
                </section>
            )
        };

export  const bckgImg = (currentWeather) => {
          let code = currentWeather && currentWeather.weather.code;
          let nightDay = currentWeather && currentWeather.pod;
          let wetherImg = document.querySelector("body").style.backgroundImage =`url(./images/${code}/${nightDay}.gif)`;
          return wetherImg
        };


export  const perSlide = () => {
            if(window.screen.width > 1001) {
                return 7
            } else if(window.screen.width < 1000) {
                return 6
            } else if (window.screen.width < 750) {
                return 5
            }else if (window.screen.width < 650) {
                return 4
            }
        }