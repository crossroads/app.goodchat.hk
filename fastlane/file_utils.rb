require 'json'
require 'rexml/document'
require 'byebug'

module FileUtils
  module_function

  def edit_json(file)
    content = JSON.parse(File.read(file))

    yield(content)

    File.open(file, 'w') do |f|
      f.write(JSON.pretty_generate(content))
    end
  end

  def edit_xml(file, xpath)
    doc = REXML::Document.new File.new(file)
    doc.root.elements.each(xpath) do |e|
      yield(e)
    end

    fd = File.open(file, "w")
    formatter = REXML::Formatters::Default.new(2)
    formatter.write(doc, fd)
    fd.close
  end
end