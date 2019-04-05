import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import * as moment from 'moment'

const Calendar = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query CalendarQuery {
        allIcal(limit: 1000, sort: { fields: [start], order: ASC }) {
          edges {
            node {
              id
              start
              end
              summary #full note
              location
              description #note
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      const { edges: calData } = data.allIcal
      const now = moment()

      return (
        <div id="calendar" className="calendar calendar__widget">
          <h1>Hello from iCal working</h1>

          {!!calData ? (
            calData.map(({ node: event }) => (
              <React.Fragment key={event.id}>
                {event.end > now.toISOString() ? (
                  <div className="calendar__event">
                    <div className="calendar__date__box">
                      <span className="calendar__item__month">
                        {moment(event.start).format('MMM')}
                      </span>
                      <span className="calendar__item__day--number">
                        {moment(event.start).format('D')}
                      </span>
                      <span className="calendar__item__day">
                        {moment(event.start).format('ddd')}
                      </span>
                    </div>

                    <div className="calendar__event__module">
                      <span className="calendar__event__time">
                        {moment(event.start).format('h:mm A')}{' '}
                      </span>
                      <span className="calendar__event__message">
                        {event.summary}
                      </span>
                      <p className="calendar__event__location">
                        <a
                          href={`http://maps.google.com/?q=${event.location}`}
                          title={`${event.summary} | ${moment(
                            event.start
                          ).format('MMM D')} @ ${moment(event.start).format(
                            'h:mm A'
                          )} - ${moment(event.end).format('h:mm A')}`}
                          aria-label={`${event.summary} | ${moment(
                            event.start
                          ).format('MMM D')} @ ${moment(event.start).format(
                            'h:mm A'
                          )} - ${moment(event.end).format('h:mm A')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {event.location}
                        </a>
                      </p>

                      <div className="calendar__event__modal">
                        <p className="calendar__event__date--sm">
                          {moment(event.start).format('MMM D YYYY')} @
                          {moment(event.start).format('h:mm A')} -
                          {moment(event.end).format('h:mm A')}
                        </p>
                        <p className="calendar__event__note">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </React.Fragment>
            ))
          ) : (
            <p>No events scheduled.</p>
          )}
        </div>
      )
    }}
  />
)

Calendar.propTypes = {
  siteTitle: PropTypes.string,
}

Calendar.defaultProps = {
  siteTitle: ``,
}

export default Calendar
