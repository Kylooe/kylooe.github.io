const Color = {
  ball: 0xefefef,
  block: 0x68c3c0,
  floor: 0xdedede,
  coin: 0x68c3c0,
  light: 0xc6c6c6,
}

const Config = {
  sceneSize: 17,  // number of points, exclude wall
  blockSize: 10,  // length
  blockArea: [3, 3],
  blockType: [
    [[2, 0], [0, 1], [1, 1], [2, 1], [0, 2]],
    [[0, 0], [1, 0], [2, 0], [1, 1]],
    [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2]],
    [[0, 1], [1, 1], [2, 1], [2, 0]]
  ],
  coinsCount: 2,
  ballRadius: 5,
  maxSpeed: 5,
  time: 6, // seconds
}

class Game {
  constructor() {
    this.score = 1
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.messageDom = document.getElementById('message')
    this.timeleft = Config.time * 60
    this.isPlaying = false
  }

  createScene() {
    const fov = 60,
          aspect = this.width / this.height,
          near = 1,
          far = 10000
    this.camera = new THREE.PerspectiveCamera(fov, aspect, near, far)
    this.camera.position.x = Config.blockSize * (Config.sceneSize + 1) / 2
    this.camera.position.y = Config.blockSize * (Config.sceneSize + 1) / 2
    this.camera.position.z = 200

    this.scene = new THREE.Scene()

    this.renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true
    })
    this.renderer.setSize(this.width, this.height)
    this.renderer.shadowMap.enabled = true

    const container = document.getElementById('scene')
    container.appendChild(this.renderer.domElement)

    window.addEventListener('resize', this.handleResize)
  }

  handleResize() {
    this.width = window.innerWidth
    this.height = window.innerHeight
    this.renderer.setSize(this.width, this.height)
    this.camera.aspect = this.width / this.height
    this.camera.updateProjectionMatrix()
  }

  createLight() {
    const ambientLight = new THREE.AmbientLight(Color.light),
          directionalLight = new THREE.DirectionalLight(0xffffff, 0.6)
    directionalLight.position.set(150, 350, 300)
    this.scene.add(ambientLight)
    this.scene.add(directionalLight)
  }

  createPlayground() {
    this.playground = new Playground()
    this.playground.init()
    this.scene.add(this.playground.mesh)
  }

  createBall() {
    this.ball = new Ball()
    this.ball.initPosition()
    this.scene.add(this.ball.mesh)
  }

  init() {
    this.createScene()
    this.createLight()
    this.createPlayground()
    this.createBall()

    this.messageDom.addEventListener('click', () => {
      this.reset()
    })

    this.isPlaying = true
  }

  reset() {
    this.messageDom.classList.add('hide')
    ;[...this.messageDom.querySelectorAll('.star')].forEach((dom, index) => {
      dom.classList.remove('active')
    })

    this.camera.rotation.x = 0
    this.camera.rotation.z = 0

    this.scene.remove(this.playground.mesh)
    this.playground.init()
    this.scene.add(this.playground.mesh)

    this.ball.initPosition()

    this.isPlaying = true
  }

  over() {
    this.isPlaying = false

    cancelAnimationFrame(this.loop)
    if (this.timeleft >= 0) this.score += 1

    ;[...this.messageDom.querySelectorAll('.star')].forEach((dom, index) => {
      if (index < this.score) dom.classList.add('active')
    })
    this.messageDom.classList.remove('hide')
  }

  handleMousemove(event) {
    const ratioX = event.clientX / this.width - 0.5,
          ratioY = 0.5 - event.clientY / this.height

    this.ratioX = ratioX
    this.ratioY = ratioY
  }

  updateBall() {
    const { x, y } = this.ball.mesh.position
    const ampX = this.ratioX, ampY = this.ratioY

    if (x > (Config.sceneSize - 2) * Config.blockSize && x < Config.sceneSize * Config.blockSize && y < Config.blockSize - Config.ballRadius) {
      this.over()
      return
    }

    let currentDotX = 0, currentDotY = 0
    if (ampX !== 0) {
      let thresholdX
      if (ampX > 0) {
        currentDotX = Math.floor((x + Config.ballRadius * 2) / Config.blockSize) - 1
        thresholdX = (Config.sceneSize + 1) * Config.blockSize
      } else {
        currentDotX = Math.floor(x / Config.blockSize) - 1
        thresholdX = 0
      }
      currentDotY = Math.floor((y + Config.ballRadius) / Config.blockSize)
      const thresholdBlock = this.playground.blockMap.find(dot => {
        const isSameX = ampX > 0 ? (dot[0] === currentDotX + 1) : (dot[0] === currentDotX - 1)
        return isSameX && dot[1] === currentDotY
      })
      if (thresholdBlock) thresholdX = (thresholdBlock[0] + 1) * Config.blockSize
      if ((x > thresholdX + Config.blockSize && ampX < 0) || (x < thresholdX - Config.ballRadius * 2 && ampX > 0)) {
        this.ball.mesh.position.x += ampX * Config.maxSpeed
        this.ball.mesh.rotation.z = 0.5 * ampX
      }
    }

    if (ampY !== 0) {
      let thresholdY
      if (ampY > 0) {
        currentDotY = Math.floor((y + Config.ballRadius * 2) / Config.blockSize) - 1
        thresholdY = (Config.sceneSize + 1) * Config.blockSize
      } else {
        currentDotY = Math.floor(y / Config.blockSize) - 1
        thresholdY = (x <= (Config.sceneSize - 2) * Config.blockSize || x >= (Config.sceneSize - 1) * Config.blockSize) ? 0 : -Config.blockSize
      }
      currentDotX = Math.floor((x + Config.ballRadius) / Config.blockSize)
      const thresholdBlock = this.playground.blockMap.find(dot => {
        const isSameY = ampY > 0 ? dot[1] === currentDotY + 1 : dot[1] === currentDotY - 1
        return isSameY && dot[0] === currentDotX
      })
      if (thresholdBlock) thresholdY = (thresholdBlock[1] + 1) * Config.blockSize
      if ((y > thresholdY + Config.blockSize && ampY < 0) || (y < thresholdY - Config.ballRadius * 2 && ampY > 0)) {
        this.ball.mesh.position.y += ampY * Config.maxSpeed
        this.ball.mesh.rotation.x = 0.5 * ampY
      }
    }
  }

  updateCamera() {
    if (this.isPlaying && (this.ratioX || this.ratioY)) {
      this.camera.rotation.y -= this.ratioX * 0.005
      this.camera.rotation.x += this.ratioY * 0.005
    }
  }

  play() {
    this.renderer.render(this.scene, this.camera)
    this.timeleft -= 1
    this.updateBall()
    this.updateCamera()

    const callback = this.play.bind(this)
    this.loop = requestAnimationFrame(callback)
  }
}

class Block {
  constructor(matrix) {
    this.mesh = new THREE.Object3D()
    const geometry = new THREE.BoxGeometry(...new Array(3).fill(Config.blockSize)),
          material = new THREE.MeshPhongMaterial({ color: Color.block })
          
    matrix.forEach(([x, y]) => {
      const cube = new THREE.Mesh(geometry, material)
      cube.position.x = x * Config.blockSize
      cube.position.y = y * Config.blockSize
      this.mesh.add(cube)
    })

    // new Array(Config.blockArea[0] * Config.blockArea[1]).fill(0).forEach((_, i) => {
    //   const isSolid = Math.round(Math.random())
    //   if (isSolid) {
    //     const cube = new THREE.Mesh(geometry, material)
    //     cube.position.x = (i % Config.blockArea[0]) * Config.blockSize
    //     cube.position.y = (i % Config.blockArea[0]) * Config.blockSize
    //     this.mesh.add(cube)
    //   }
    // })
  }
}

class Coin {
  constructor() {
    const geometry = new THREE.TetrahedronGeometry(6, 0),
          material = new THREE.MeshPhongMaterial({
            color: Color.coin,
            shininess: 0,
            specular: 0xffffff,
            flatShading: true
          })
    this.mesh = new THREE.Mesh(geometry, material)
    this.mesh.castShadow = true
  }
}

class Playground {
  constructor() {
    this.mesh = new THREE.Object3D()
    const cubeGeometry = new THREE.BoxGeometry(...new Array(3).fill(Config.blockSize)),
          planeGeometry = new THREE.PlaneGeometry(Config.blockSize * (Config.sceneSize + 2), Config.blockSize * (Config.sceneSize + 2)),
          cubeMaterial = new THREE.MeshPhongMaterial({ color: Color.block }),
          floorMaterial = new THREE.MeshPhongMaterial({
            color: Color.block,
            opacity: 0.5,
            transparent: true
          })

    // floor
    const plane = new THREE.Mesh(planeGeometry, floorMaterial)
    plane.position.x = Config.blockSize * (Config.sceneSize + 1) / 2
    plane.position.y = Config.blockSize * (Config.sceneSize + 1) / 2
    plane.position.z = - Config.blockSize / 2
    this.mesh.add(plane)

    // wall
    for (let side = 0; side < 4; side++) {
      for (let i = 0; i < Config.sceneSize + 2; i++) {
        if (side === 0 && (i === Config.sceneSize - 2 || i === Config.sceneSize - 1)) continue  // exit

        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
        const x = side % 2 ? (side === 1 ? Config.sceneSize + 1 : 0) : i,
              y = side % 2 ? i : (side ? Config.sceneSize + 1 : 0)
        cube.position.x = x * Config.blockSize
        cube.position.y = y * Config.blockSize
        this.mesh.add(cube)
      }
    }

    this.blocksPool = []  // buffer for blocks mesh
    this.blockMap = []  // map solid dots
  }

  init() {
    if (this.blocksPool.length) {
      this.blocksPool.forEach(block => {
        this.mesh.remove(block.mesh)
      })
      this.blocksPool = []
      this.blockMap = []
    }

    const blockCountX = Math.floor((Config.sceneSize - 1) / (Config.blockArea[0] + 1)),
          blockCountY = Math.floor((Config.sceneSize - 1) / (Config.blockArea[1] + 1)),
          blockAreaAll = [Config.blockArea[0] + 1, Config.blockArea[1] + 1],  // area of blocks contain gap
          blockSizeX = Config.blockSize * blockAreaAll[0],
          blockSizeY = Config.blockSize * blockAreaAll[1]
    const blockCount =  blockCountX * blockCountY
    for (let i = 0; i < blockCount; i++) {
      const index = Math.round(Math.random() * (Config.blockType.length  - 1))
      const matrix = Config.blockType[index]

      const block = new Block(matrix)
      block.mesh.position.x = blockSizeX * (i % blockCountX) + Config.blockSize * 2
      block.mesh.position.y = blockSizeY * (Math.floor(i / blockCountX) % blockCountY) + Config.blockSize * 2
      this.mesh.add(block.mesh)
      this.blocksPool.push(block)

      this.blockMap.push(...matrix.map(([x, y]) => {
        const sceneX = 1 + (i % blockCountX) * blockAreaAll[0] + x,
              sceneY = 1 + (Math.floor(i / blockCountX) % blockCountY) * blockAreaAll[1] + y
        return [sceneX, sceneY]
      }))
    }
  }
}

class Ball {
  constructor() {
    const geometry = new THREE.SphereGeometry(Config.ballRadius),
          material = new THREE.MeshPhongMaterial({
            color: Color.ball,
            specular: Color.light,
            flatShading: true
          })
    this.mesh = new THREE.Mesh(geometry, material)
  }

  initPosition() {
    this.mesh.position.x = Config.blockSize
    this.mesh.position.y = Config.blockSize * Config.sceneSize
  }
}

window.onload = function() {
  const game = new Game()
  game.init()
  game.play()

  document.addEventListener('mousemove', e => {
    requestAnimationFrame(() => {
      game.handleMousemove(e)
    })
  })
}
