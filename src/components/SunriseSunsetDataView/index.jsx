import { StyledImageWrapper, StyledHeader, StyledImage } from './_.styled';

function SunriseSunsetDataView({ timeData }) {
  return (
    <div>
      <StyledHeader>Sunrise and Sunset</StyledHeader>
      <StyledImageWrapper>
        <StyledImage src="img/retro-sun.jpg" alt="Sunrise/Sunset" />
      </StyledImageWrapper>
      {timeData.length === 5 && (
        <section>
          <ul>
            {timeData?.map(info => (
              <li key={info.latitude + `-` + info.longitude}>
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
