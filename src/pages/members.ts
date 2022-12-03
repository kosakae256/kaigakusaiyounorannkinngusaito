// membersに辞書を追加していってください
// ↓記述例
/*
{
  name: "ニックネームを入力",
  score: "点数を入力",
  student_id: "学籍番号を入力"
}
*/

const members = [
  {
    name: "へねぱす",
    score: 0,
    student_id: 19214
  }
]

export default members.sort((a, b) => b.score - a.score);