import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'

const Teams = ({ siteTitle }) => (
  <StaticQuery
    query={graphql`
      query TeamsQuery {
        allPrismicStaff {
          edges {
            node {
              data {
                staff_member_name_list
                title {
                  staff_member_title_select
                }
                staff_member_phone
                staff_member_email
                team {
                  team_gender
                  team_year_select
                  team_level
                }
                staff_member_bio {
                  html
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      console.log(data)
      const { edges: staff } = data.allPrismicStaff
      console.log(staff)
      return (
        <Layout>
          <section id="teams" className="teams teams__grid">
            <div className="container content__wrapper content__wrapper__with-sidebar">
              <div className="row">
                <aside className="col-12 col-md-4">Sidebar</aside>
                <section className="col-12 col-md-8 table">
                  <h1>Teams</h1>
                  <h2>Directors of Coaching</h2>
                  <div className="row no-gutters  hidden-sm-down">
                    <div className="col-sm-4">
                      <p className="">Position</p>
                    </div>
                    <div className="col-sm-4">
                      <p className="">Name</p>
                    </div>
                    <div className="col-sm-4">
                      <p className="">Phone</p>
                    </div>
                    <div className="col-sm-4">
                      <p className="">Email</p>
                    </div>
                  </div>
                  {!!staff && staff !== null
                    ? staff.map(({ node: item }, i) => (
                        <div key={i} className="tabel__head">
                          <p>{item.data.staff_member_name_list}</p>
                          <p>{item.data.staff_member_email}</p>
                          <p>{item.data.staff_member_phone}</p>
                        </div>
                      ))
                    : null}
                </section>
              </div>
            </div>
          </section>
        </Layout>
      )
    }}
  />
)

Teams.propTypes = {
  siteTitle: PropTypes.string,
}

Teams.defaultProps = {
  siteTitle: ``,
}

export default Teams
