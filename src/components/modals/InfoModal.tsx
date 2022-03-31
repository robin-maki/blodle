import { Cell } from '../grid/Cell'
import { BaseModal } from './BaseModal'

type Props = {
  isOpen: boolean
  handleClose: () => void
}

export const InfoModal = ({ isOpen, handleClose }: Props) => {
  return (
    <BaseModal title="플레이 방법" isOpen={isOpen} handleClose={handleClose}>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        블롭-단어들을 6번의 시도 안에 맞추세요. 블롭은 여러 번 등장할 수도 있어요.
        각각의 시도마다 타일 색깔이 바뀌어서 정답에 얼마나 가까워지고 있는지 알 수 있어요.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="🥰"
          status="correct"
        />
        <Cell value="😭" />
        <Cell value="😱" />
        <Cell value="🤔" />
        <Cell value="😍" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <img src='/image/🥰.png' alt='🥰' style={{display: 'inline', width: '1em'}}/> 블롭은 올바른 위치에 있어요.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🥰" />
        <Cell value="😭" />
        <Cell
          isRevealing={true}
          isCompleted={true}
          value="😱"
          status="present"
        />
        <Cell value="🤔" />
        <Cell value="😍" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <img src='/image/😱.png' alt='😱' style={{display: 'inline', width: '1em'}}/> 블롭은 답 안에 있지만 다른 위치에 있어요.
      </p>

      <div className="flex justify-center mb-1 mt-4">
        <Cell value="🥰" />
        <Cell value="😭" />
        <Cell value="😱" />
        <Cell isRevealing={true} isCompleted={true} value="🤔" status="absent" />
        <Cell value="😍" />
      </div>
      <p className="text-sm text-gray-500 dark:text-gray-300">
        <img src='/image/🤔.png' alt='🤔' style={{display: 'inline', width: '1em'}}/> 블롭은 어디에도 들어가지 않아요.
      </p>

      <p className="mt-6 italic text-sm text-gray-500 dark:text-gray-300">
        이 게임은 우리가 다 아는 그 게임, Wordle에서 영감을 받아서 플래닛 민족대명절을 기념해 만들어졌어요. -{' '}
        <a
          href="https://github.com/robin-maki/blodle"
          className="underline font-bold"
        >
          여기서 코드를 확인해보세요
        </a>, 포크한 오리지널 클론은 {' '}
        <a
          href="https://github.com/cwackerfuss/react-wordle"
          className="underline font-bold"
        >여기서</a>{' '}확인하실 수 있어요.
      </p>
    </BaseModal>
  )
}
