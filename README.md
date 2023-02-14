<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://openweathermap.org/">
    <img src="https://openweathermap.org/themes/openweathermap/assets/img/logo_white_cropped.png" alt="Logo">
  </a>

  <h3 align="center">Säätutka - OpenWeatherMap Application</h3>

  <p align="center">
    An application that shows weather of four Finnish cities: Espoo, Jyväskylä, Kuopio and Tampere.
    <br>
    <br>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This application lets you input coordinates for four locations of your choice. You will get current and future weather data easily.
You can also choose if one particular location is shown only, or all of the locations.

Features:
* The application waits accordingly before showing the weather data.
* Future weather data is shown in 3-hour segments, so you see 15 hours into the future.
* Both rain and snow precipitations are shown in a same value.
* Icons give fast picture of the weather situation.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

[![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites

* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

Note: There might be vulnerabilities present after installation, but I've had no problem starting the application nevertheless.

1. Get a free API Key at [https://openweathermap.org/](https://openweathermap.org/)
2. Clone the repo
   ```sh
   git clone https://github.com/RPLaine/openweather.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your API in `App.js`
   ```js
   const apiKey = 'ENTER YOUR APIKEY';
   ```
5. Start the application
   ```sh
   npm start
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

The application loads showing all the cities and their information right away.

![Alt Image text](/img/main.png?raw=true "Optional Title")



If you want to show only one city, you can hover over "Kaikki kaupungit" segment and choose what particular city to show, by clicking the city.

![Alt Image text](/img/citymenu.png?raw=true "Optional Title")



You may enter your API key by replacing the "ENTER YOUR APIKEY" string in the App.js file.
Also, modifying locations array, you may change which area or city the application returns information of.

![Alt Image text](/img/code.png?raw=true "Optional Title")

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [X] City visibility selection
- [X] Fix correct precipitation volume
- [X] Fix date postfix
- [X] Fix nighttime icons
  - [X] Change iconsets according to sunset and sunrise
- [ ] Weather data does not update once it's loaded

### Research possibilities

* Study if useEffect can be triggered again after a certain time.
  * If possible, flip setLoading and trigger useEffect simultaneously to fetch data again in some interval.
* Alternatively, refresh the page once every ten minutes.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Project Link: [https://github.com/RPLaine/openweather](https://github.com/RPLaine/openweather)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Vue.js]: https://img.shields.io/badge/Vue.js-35495E?style=for-the-badge&logo=vuedotjs&logoColor=4FC08D
[Vue-url]: https://vuejs.org/
[Angular.io]: https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white
[Angular-url]: https://angular.io/
[Svelte.dev]: https://img.shields.io/badge/Svelte-4A4A55?style=for-the-badge&logo=svelte&logoColor=FF3E00
[Svelte-url]: https://svelte.dev/
[Laravel.com]: https://img.shields.io/badge/Laravel-FF2D20?style=for-the-badge&logo=laravel&logoColor=white
[Laravel-url]: https://laravel.com
[Bootstrap.com]: https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white
[Bootstrap-url]: https://getbootstrap.com
[JQuery.com]: https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white
[JQuery-url]: https://jquery.com 
[main-img]: https://github.com/RPLaine/openweather/blob/main/img/main.png
[menu-img]: https://github.com/RPLaine/openweather/blob/main/img/citymenu.png
