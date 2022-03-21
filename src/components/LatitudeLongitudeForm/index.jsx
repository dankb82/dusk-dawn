import { useState, useEffect } from 'react';
import SunriseSunsetDataView from '../SunriseSunsetDataView';
import {
  StyledForm,
  StyledInput,
  StyledLocationButton,
  StyledResetButton,
  StyledDataViewWrapper,
} from './_.styled';

function LatitudeLongitudeForm() {
  const initialValues = {
    latitude: '',
    longitude: '',
  };
  const [values, setValues] = useState(initialValues);
  const [latAndLong, setLatAndLong] = useState({});

  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const { latitude, longitude } = latAndLong;
    if (!latitude || !longitude) return;
    const url = `https://api.ipgeolocation.io/astronomy?apiKey=${process.env.REACT_APP_IPGEOLOCATION_API_KEY}&lat=${latitude}&long=${longitude}`;
    const fetchData = async () => {
      try {
        const data = await fetch(url);
        const { sunrise, sunset } = await data.json();
        setTimeData([
          ...timeData,
          {
            latitude,
            longitude,
            sunrise,
            sunset,
          },
        ]);
      } catch (error) {
        return {};
      }
    };
    fetchData();
    setLatAndLong({});
  }, [timeData, latAndLong]);

  const handleChange = e => {
    const value = e.target.value;
    setValues({
      ...values,
      [e.target.name]: value,
    });
  };

  const reset = () => {
    setTimeData([]);
    setLatAndLong({});
    setValues(initialValues);
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target[2].name === 'reset') {
      reset();
    } else {
      setLatAndLong({ ...values });
      setValues(initialValues);
    }
  };
  return (
    <div>
      <StyledForm onSubmit={handleSubmit} data-testid="lat-long-form">
        <div>
          <StyledInput
            aria-label="latitude input"
            type="number"
            name="latitude"
            value={values.latitude}
            onChange={handleChange}
            placeholder="Latitude"
            data-testid="latitude-input-field"
          />
          <StyledInput
            aria-label="latitude input"
            type="number"
            name="longitude"
            value={values.longitude}
            onChange={handleChange}
            placeholder="Longitude"
            data-testid="longitude-input-field"
          />
          {timeData.length < 5 ? (
            <StyledLocationButton
              aria-label="submit latitude and longitude"
              type="submit"
              name="submit"
              disabled={
                !values.latitude || !values.longitude || timeData.length >= 5
              }
              data-testid="lat-long-submit-button"
            >
              Add Location
            </StyledLocationButton>
          ) : (
            <StyledResetButton
              aria-label="reset locations"
              type="submit"
              name="reset"
              data-testid="full-reset-button"
            >
              Reset
            </StyledResetButton>
          )}
        </div>
      </StyledForm>
      <StyledDataViewWrapper>
        <SunriseSunsetDataView timeData={timeData} />
      </StyledDataViewWrapper>
    </div>
  );
}
export default LatitudeLongitudeForm;
