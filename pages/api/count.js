let count = 0

const countFn = (req, res) => {
  count += 1
  res.status(200).json({ count })
}

export default countFn
