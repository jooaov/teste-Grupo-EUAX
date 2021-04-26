-- projetos_atividades.Atividades definition

CREATE TABLE `Atividades` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome_da_atividade` varchar(60) NOT NULL,
  `finalizado` tinyint(1) NOT NULL DEFAULT '0',
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `ID_Projeto` int(11) NOT NULL,
  `descrição` longtext,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=latin1;


-- projetos_atividades.Projetos definition

CREATE TABLE `Projetos` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `nome_do_projeto` varchar(60) NOT NULL,
  `data_inicio` date NOT NULL,
  `data_fim` date NOT NULL,
  `descrição` longtext,
  `finalizada` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=latin1;