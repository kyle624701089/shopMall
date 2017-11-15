/*
Navicat MySQL Data Transfer

Source Server         : kyle
Source Server Version : 50525
Source Host           : localhost:3306
Source Database       : springboot

Target Server Type    : MYSQL
Target Server Version : 50525
File Encoding         : 65001

Date: 2017-11-15 16:30:33
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `product_detail_info_msg`
-- ----------------------------
DROP TABLE IF EXISTS `product_detail_info_msg`;
CREATE TABLE `product_detail_info_msg` (
  `ID` varchar(255) NOT NULL DEFAULT '',
  `ORDER` int(5) DEFAULT NULL,
  `DETAIL_INFO_ID` varchar(255) DEFAULT NULL,
  `DETAIL_MSG` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product_detail_info_msg
-- ----------------------------
INSERT INTO `product_detail_info_msg` VALUES ('1', '1', '2', '血液病患者，特别是血小板减少、有出血倾向者禁做');
INSERT INTO `product_detail_info_msg` VALUES ('2', '2', '2', '急性软组织损伤者，有水肿和渗出物者禁做');
INSERT INTO `product_detail_info_msg` VALUES ('3', '3', '2', '各种皮肤病的病变部位及水火烫伤等所致的皮肤损伤部位禁做');
