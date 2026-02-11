[CSS]
- 'flexbox'(display: flex): 뷰 포트나 요소의 크기가 불명확하거나 동적으로 변할 때에도 효율적으로 요소를
    배치, 정렬, 분산 가능
  ex) .flex_container {
        display: flex // 정렬 담당 부모가 됨.
      }
  1. 자식 요소 flex item / 상위 부모 요소 flex container
    <img width="500" height="225" alt="image" src="https://github.com/user-attachments/assets/d920750b-34ea-4705-9892-53e25f12c30f" />

- 'flex-direction'
  ex) flex-direction: row; // row(기본값): left -> right / column: up -> down => 주축(main axis) 방향

- 'justify-content'(가로 방향 정렬)
  (주축 방향 정렬)1. flex-start: left 2. center: 가운데 3. flex-end: right 4. space-between: 양쪽 끝 + 사이 간격
  
- 'align-items' (세로 방향 정렬)
  (주축 반대 방향 정렬)1. flex-start: up 2. center: 가운데 3. flex-end: down

- 'gap'


- 'grid'
