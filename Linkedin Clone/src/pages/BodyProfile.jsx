import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProfile } from '../redux/actions/profiles'

export default function BodyProfile() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProfile())
  }, [])

  const state = useSelector(state => state.profili)
  console.log(state);

  return (
    <Container>
      <Row>
        <Col md={7} xs={12}>
        </Col>

        <Col md={4} xs={0}>
        </Col>
      </Row>
    </Container>
  )
}
