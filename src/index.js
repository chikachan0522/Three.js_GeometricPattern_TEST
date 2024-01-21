import * as THREE from 'three';
import './style.css';

class main {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this._init();
    }

    _init() {
        this._initScene();
        this._initCamera();
        this._initRenderer();
        this._addEvent();
    }

    _initScene() {
        this.scene = new THREE.Scene();
        this.scene.background = new THREE.Color(0xffffff);
    }

    _initCamera() {
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 2;
        this.scene.add(this.camera);
    }

    _initRenderer() {
        this.renderer = new THREE.WebGLRenderer();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        document.body.appendChild(this.renderer.domElement);
    }

    _resize() {
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight);
    }

    _render() {
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(this._render);
    }

    _addEvent() {
        this._render = this._render.bind(this);
        window.addEventListener('load', () => {this._render()});
        window.addEventListener('resize', () => {this._resize()});
    }
}

new main();