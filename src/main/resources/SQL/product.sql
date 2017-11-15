/*
Navicat MySQL Data Transfer

Source Server         : kyle
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : springboot

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-11-15 16:30:16
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `product`
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `ID` varchar(255) NOT NULL DEFAULT '',
  `NAME` varchar(255) DEFAULT NULL,
  `INTRO` varchar(255) DEFAULT NULL,
  `DURATION` varchar(10) DEFAULT NULL,
  `OPETYPE` varchar(255) DEFAULT NULL,
  `PAIEDCOUNT` varchar(11) DEFAULT NULL,
  `PRICE` varchar(11) DEFAULT NULL,
  `PRODUCT_TYPE` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '测试产品1', '测试1', '60', '坐姿', '100', '888', '1');
INSERT INTO `product` VALUES ('2', '测试产品2', '测试2', '120', '卧姿', '200', '88', '2');
INSERT INTO `product` VALUES ('3', '测试产品3', '测试3', '100', '站姿', '200', '100', '3');
INSERT INTO `product` VALUES ('4', '测试产品4', '测试4', '200', '坐姿', '100', '168', '1');
INSERT INTO `product` VALUES ('5', '测试产品5', '测试5', '90', '站姿', '200', '198', '3');
