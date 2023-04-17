const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
		this.root = null
	}

	root() {
		if (!this.root) {
			return null
		}

		return this.root
	}

	add(data) {
		if (!this.root) {
			this.root = new Node(data)
		} else {
			this.addTo(this.root, data)
		}
	}

	addTo(node, value) {
		if (value < node.data) {
			if (!node.left) {
				node.left = new Node(value)
			} else {
				this.addTo(node.left, value)
			}
		} else {
			if (!node.right) {
				node.right = new Node(value)
			} else {
				this.addTo(node.right, value)
			}
		}
	}

	has(data) {
		return !!this.find(data)
	}

	find(data) {
		if (!this.root || !this.root.data) {
			return null
		}

		return this.findWithParent(this.root, data)
	}

	findWithParent(node, value) {
		if (node.data === value) {
			return node
		}

		if (value < node.data) {
			if (!node.left) {
				return null
			}

			return this.findWithParent(node.left, value)
		} else {
			if (!node.right) {
				return null
			}

			return this.findWithParent(node.right, value)
		}
	}

	remove(data) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }


	min() {
		const arr = this.convertToArray(this.root)

		return Math.min(...arr)
	}

	max() {
		const arr = this.convertToArray(this.root)

		return Math.max(...arr)
	}

	convertToArray(node) {
		if (!node) {
			return []
		}

		return [
			node.data,
			this.convertToArray(node.left),
			this.convertToArray(node.right),
		].flat(Infinity)
	}
}

module.exports = {
  BinarySearchTree
};