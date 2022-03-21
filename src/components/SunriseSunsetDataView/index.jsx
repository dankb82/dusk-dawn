import { StyledImageWrapper, StyledHeader, StyledImage } from './_.styled';

function SunriseSunsetDataView({ timeData }) {
  console.log(`data: ${JSON.stringify(timeData)}`);
  return (
    <div>
      <StyledHeader data-testid="data-container-header">
        Sunrise and Sunset
      </StyledHeader>
      <StyledImageWrapper>
        <StyledImage
          src="img/retro-sun.jpg"
          alt="Sunrise/Sunset"
          data-testid="data-container-image"
        />
      </StyledImageWrapper>
      {timeData.length === 5 && (
        <section data-testid="results-container">
          <ul data-testid="results-list">
            {timeData?.map(info => (
              <li
                key={info.latitude + `-` + info.longitude}
                data-testid="result-item"
              >
                <label>{info.latitude + `/` + info.longitude}</label>:{' '}
                <span>
                  Sunrise: {info.sunrise} Sunset: {info.sunset}
                </span>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default SunriseSunsetDataView;
