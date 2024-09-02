package Test;

import java.awt.*;
import java.awt.event.*;
import java.io.*;
import java.util.*;

import javax.swing.*;
import javax.swing.table.*;

class GUI implements ActionListener{
	File file;
	FileReader fileReader;
	JFileChooser fileChooser;
	JFrame frame;
	JButton button;
	DefaultTableModel tableModel;
	JTable table;
	JScrollPane scrollPane;
	public GUI() {
		// TODO 自动生成的构造函数存根
		frame=new JFrame("read");
		tableModel=new DefaultTableModel();
		table=new JTable(tableModel);
		scrollPane=new JScrollPane(table);
		frame.add(scrollPane,BorderLayout.CENTER);
		
		button=new JButton("选择文本文件");
		frame.add(button,BorderLayout.SOUTH);
		
		frame.setSize(400, 200);
		frame.setVisible(true);
		frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		button.addActionListener(this);
	}
	public void actionPerformed(ActionEvent event) {
		
		fileChooser=new JFileChooser("D:\\");
		if(fileChooser.showOpenDialog(frame)==JFileChooser.APPROVE_OPTION) {
			file=fileChooser.getSelectedFile();
			try {
				fileReader=new FileReader(file);
				Vector<String> vector=new Vector<String>();
				vector.add("学号");vector.add("姓名");vector.add("性别");vector.add("爱好");vector.add("身体状况");
				Vector<Vector<String>> dataVector=new Vector<Vector<String>>();
				Vector<String> dataVector2=new Vector<String>();
				String string="";
				while(fileReader.ready()) {
					char ch=(char) fileReader.read();
					if(ch==' ') {
						dataVector2.add(string);
						string="";
					}
					else if(ch=='\n') {
						dataVector2.add(string);
						string="";
						dataVector.add(dataVector2);
						dataVector2=new Vector<String>();
					}
					else {
						string=string+ch;
					}
				}
				tableModel.setDataVector(dataVector, vector);;
			} catch (FileNotFoundException e) {
				// TODO: handle exception
				e.printStackTrace();
			}catch (Exception e) {
				// TODO: handle exception
				e.printStackTrace();
			}
		}
		
	}
}

public class test {

	public static void main(String[] args) {
		// TODO 自动生成的方法存根
		new GUI();
	}

}
