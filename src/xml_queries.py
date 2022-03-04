import xml.dom.minidom as dom

class MyData:
    def __init__(self):
        self.doc = dom.parse("data.xml")
        self.employee=self.doc.getElementsByTagName("employee")

    def getInfoByAttribute(self, id):
        for emp in self.employee:
            
            print(emp)
            # id = emp.getElementsByTagName("id")
            # #print(id[0].firstChild.data)
            # try:
            #     if (int(id[0].firstChild.data) == int(id)):
            #         print(id[0].firstChild.data)
            # except Exception as e:
            #     pass



if __name__ == "__main__":
    myxmldata = MyData()
    myxmldata.getInfoByAttribute(10)

