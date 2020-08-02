import test from 'ava'
import tmp from 'tmp'
import transform from '../index.js'

test('basic', async t => {
  const tmpDir = tmp.dirSync()

  await transform('test/input', 'test/transform.html', tmpDir.name)
  t.pass()

  // await unlink(tmpDir.name + '/foo/bar.html')
  // await rmdir(tmpDir.name + '/foo')
  tmpDir.removeCallback()
})
