import styled from "styled-components"

export const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
`

interface maxWidthParam {
  maxWidth: number
}

interface maxHeightParam {
  maxHeight: number
}
/*
  max-width: ${({ maxWidth }: maxWidthParam) => maxWidth && `${maxWidth}px`};
  max-height: ${({ maxHeight }: maxHeightParam) => maxHeight && `${maxHeight}px`};
 */

export const Container = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
`

export const Canvas = styled.canvas`
  position: absolute;
  top: 0;
  left: 0;
`

export const Video = styled.video`
  position: absolute;

  &::-webkit-media-controls-play-button {
    display: none !important;
    -webkit-appearance: none;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  bottom: 20px;
  left: 20px;
  box-shadow: 0px 0px 20px 56px rgba(0, 0, 0, 0.6);
  border: 1px solid #ffffff;
  border-radius: 10px;
`

interface flashParams {
  flash: any
}

export const Flash = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  background-color: #ffffff;
`

export const Button = styled.button`
  width: 75%;
  min-width: 100px;
  max-width: 250px;
  margin-top: 24px;
  padding: 12px 24px;
  background: silver;
`
